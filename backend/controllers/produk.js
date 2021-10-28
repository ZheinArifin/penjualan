import {getProduk, getProdukById, insertProduk, updateProduk, deleteProduk}  from '../models/produkModels.js';

// controller get All Produk
export const showProduk = (req, res) => {
    getProduk((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

// controller get One Produk
export const showOneProduk = (req, res) => {
    getProdukById(req.params.id, (err, results) => {
        if(err){
            res.send(err);
        }else{
            res.json(results);
        }
    })
}

// controller insert Produk
export const addProduk = (req, res) => {
    const data = req.body;
    insertProduk(data, (err, results) => {
        if(err){
            res.send(err);
        }else{
            res.json(results);
        } 
    });
}

// controller update Produk
export const updateProdukById = (req, res) => {
    const data  = req.body;
    const id    = req.params.id;
    updateProduk(data, id, (err, results) => {
        if(err){
            res.send(err);
        }else{
            res.json(results);
        } 
    });
}

export const deleteProdukById = (req, res) => {
    const id = req.params.id;
    deleteProduk(id, (err, results) => {
        if(err){
            res.send(err);
        }else{
            res.json(results);
        } 
    });
}