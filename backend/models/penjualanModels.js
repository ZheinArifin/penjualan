import con from '../config/database.js';

// Get All Penjualan
export const getPenjualan = (result) => {
    con.query("SELECT penjualan.*, barang.* FROM penjualan JOIN barang ON penjualan.id_barang = barang.id", (err, results) => {
        if(err) {
            console.log(err);
            result(err,null);
        } else {
            result(null, results);
        }
    });
}

// Get One Penjualan
export const getPenjualanById = (id, result) => {
    con.query("SELECT * FROM penjualan WHERE id = ?", [id], (err, results) => {
        if(err) {
            console.log(err);
            result(err,null);
        } else {
            result(null, results[0]);
        }
    });
}

// Insert Data Penjualan
export const insertPenjualan = (data, result) => {
    con.query("INSERT INTO penjualan SET ?", [data], (err, results) => {
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            con.query("SELECT * FROM barang WHERE id = ?", [data.id_barang], (err, results) => {
                if(results) {
                    var stok = results[0]['stok'] - data.jumlah;
                    con.query("UPDATE barang SET  stok = ? WHERE id = ?", [stok, data.id_barang], (err, results));
                } 
            });
            result(null, results);
        }
    });
}

// Update Data Penjualan
export const updatePenjualan = (data, id, result) => {
    let jml;
    con.query("SELECT * FROM penjualan WHERE id = ?", [id], (err, results) => {
        if(result) {
           jml = results[0]['jumlah'];

        }
    });
    con.query("UPDATE penjualan SET id_barang = ?, jumlah = ?, tanggal_transaksi = ? WHERE id = ?", [data.id_barang, data.jumlah, data.tanggal_transaksi, id], (err, results) => {
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            con.query("SELECT * FROM barang WHERE id = ?", [data.id_barang], (err, results) => {
                if(results) {
                    var stok = (results[0]['stok'] +jml) - data.jumlah;
                    con.query("UPDATE barang SET stok = ? WHERE id = ?", [stok, data.id_barang]);
                }
            });
            result(null, results);
        }
    });
}

// Delete Data Penjualan
export const deletePenjualan = (id, result) => {
    con.query("DELETE FROM penjualan WHERE id = ?", [id], (err, results) => {
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

// Cari
export const getPenjualanByDate = (tgl_awal, tgl_akhir, result) => {
    const query = "SELECT penjualan.*, barang.* FROM `penjualan` JOIN barang ON penjualan.id_barang = barang.id "+
                   "WHERE `tanggal_transaksi` BETWEEN '"+tgl_awal+"' AND '"+tgl_akhir+"'";
    const values = [tgl_awal, tgl_awal];      
    con.query(query, (err, results) => {
        if(err) {
            console.log(err);
            result(err,null);
        } else {
            result(null, results[0]);
        }
    });               
    
}