import {getPenjualan, getPenjualanById, getPenjualanByDate, insertPenjualan, updatePenjualan, deletePenjualan}  from '../models/PenjualanModels.js';

// controller get All Penjualan
export const showPenjualan = (req, res) => {
    getPenjualan((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

// controller get One Penjualan
export const showOnePenjualan = (req, res) => {
    getPenjualanById(req.params.id, (err, results) => {
        if(err){
            res.send(err);
        }else{
            res.json(results);
        }
    })
}

// controller get One Penjualan
export const showOnePenjualanByDate = (req, res) => {
    const tgl_awal    = req.params.tgl_awal;
    const tgl_akhir    = req.params.tgl_akhir;
    getPenjualanByDate(tgl_awal, tgl_akhir, (err, results) => {
        if(err){
            res.send(err);
        }else{
            res.json(results);
        }
    })
}

// controller insert Penjualan
export const addPenjualan = (req, res) => {
    const data = req.body;
    insertPenjualan(data, (err, results) => {
        if(err){
            res.send(err);
        }else{
            res.json(results);
        } 
    });
}

// controller update Penjualan
export const updatePenjualanById = (req, res) => {
    const data  = req.body;
    const id    = req.params.id;
    updatePenjualan(data, id, (err, results) => {
        if(err){
            res.send(err);
        }else{
            res.json(results);
        } 
    });
}

export const deletePenjualanById = (req, res) => {
    const id = req.params.id;
    deletePenjualan(id, (err, results) => {
        if(err){
            res.send(err);
        }else{
            res.json(results);
        } 
    });
}