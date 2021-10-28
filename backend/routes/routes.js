// import express
import express from "express";
 
// import function from controller
import {showProduk, showOneProduk, addProduk, updateProdukById, deleteProdukById}  from '../controllers/produk.js';
import {showPenjualan, showOnePenjualan, addPenjualan, updatePenjualanById, deletePenjualanById,showOnePenjualanByDate} from '../controllers/penjualan.js';
 
// init express router
const router = express.Router();

// ================================================ PRODUK ================================================ //
// Get All Produk
router.get('/produk', showProduk);
 
// Get Single Product
router.get('/produk/:id', showOneProduk);
 
// Create New Produk
router.post('/produk', addProduk);
 
// Update Produk
router.put('/produk/:id', updateProdukById);
 
// Delete Produk
router.delete('/produk/:id', deleteProdukById);
 
// ================================================ PENJUALAN =============================================== //
// Get All Produk
router.get('/penjualan', showPenjualan);
 
// Get Single Product
router.get('/penjualan/:id', showOnePenjualan);

// Get Single Product
router.get('/penjualan/:tgl_awal/:tgl_akhir', showOnePenjualanByDate);
 
// Create New Produk
router.post('/penjualan', addPenjualan);
 
// Update Penjualan
router.put('/penjualan/:id', updatePenjualanById);
 
// Delete Penjualan
router.delete('/penjualan/:id', deletePenjualanById);
// export default router
export default router;