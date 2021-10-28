import con from '../config/database.js';

// Get All Produk
export const getProduk = (result) => {
    con.query("SELECT * FROM barang", (err, results) => {
        if(err) {
            console.log(err);
            result(err,null);
        } else {
            result(null, results);
        }
    });
}

// Get One Produk
export const getProdukById = (id, result) => {
    con.query("SELECT * FROM barang WHERE id = ?", [id], (err, results) => {
        if(err) {
            console.log(err);
            result(err,null);
        } else {
            result(null, results[0]);
        }
    });
}

// Insert Data Produk
export const insertProduk = (data, result) => {
    con.query("INSERT INTO barang SET ?", [data], (err, results) => {
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

// Update Data Produk
export const updateProduk = (data, id, result) => {
    con.query("UPDATE barang SET nama_barang = ?, stok = ?, kategori = ? WHERE id = ?", [data.nama_barang, data.stok, data.kategori, id], (err, results) => {
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

// Delete Data Produk
export const deleteProduk = (id, result) => {
    con.query("DELETE FROM barang WHERE id = ?", [id], (err, results) => {
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}