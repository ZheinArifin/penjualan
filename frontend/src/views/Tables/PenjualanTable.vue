<template>
  <div class="card shadow" :class="type === 'dark' ? 'bg-default' : ''">
    <div
      class="card-header border-0"
      :class="type === 'dark' ? 'bg-transparent' : ''"
    >
      <router-link :to="{ name: 'Add-Penjualan'}" class="btn btn-success"><i class="fas fa-plus"></i> Tambah</router-link><br><br>
      <div class="row">
        <div class="col-md-3">
          <input class="form-control" type="date" name="tgl_awal" v-model="tgl_awal">
        </div>
        <div class="col-md-3">
          <input class="form-control" type="date" name="tgl_akhir" v-model="tgl_akhir">
        </div>
        <div class="col-md-3">
          <button class="btn btn-success" @click="cari">Cari</button>
        </div>
      </div>
      <div class="row align-items-center">
        <div class="col">
          <h3 class="mb-0" :class="type === 'dark' ? 'text-white' : ''">
            {{ title }}
          </h3>
        </div>
        <div class="col text-right">
          <base-button type="primary" size="sm">See all</base-button>
        </div>
      </div>
    </div>

    <div class="table-responsive">
        
      <base-table
        class="table align-items-center table-flush"
        :class="type === 'dark' ? 'table-dark' : ''"
        :thead-classes="type === 'dark' ? 'thead-dark' : 'thead-light'"
        tbody-classes="list"
        :data="tableData"
      >
        <template v-slot:columns>
          <th>No</th>
          <th>Barang</th>
          <th>Jumlah</th>
          <th>Tanggal Transaksi</th>
          <th></th>
        </template>
        <template v-slot:default="row">
          <th scope="row">
            <div class="media align-items-center">
              <div class="media-body">
                <span class="name mb-0 text-sm">{{ row.item.id }}</span>
              </div>
            </div>
          </th>
          <td class="budget">
            {{ row.item.nama_barang }}
          </td>
          <td>
            {{ row.item.jumlah }}
          </td>
          <td>
            {{format_date(row.item.tanggal_transaksi)}}
          </td>

          <td class="text-right">
            <base-dropdown class="dropdown" position="right">
              <template v-slot:title>
                <a
                  class="btn btn-sm btn-icon-only text-light"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i class="fas fa-ellipsis-v"></i>
                </a>
              </template>
                  <router-link class="dropdown-item" :to="{ name: 'Edit-Penjualan', params: { id: row.item.id } }">Edit
                  </router-link>
                  <a
                  class="button is-danger is-small dropdown-item"
                  @click="deletePenjualan(row.item.id)"
                  >Delete</a>
            </base-dropdown>
          </td>
        </template>
      
      </base-table>
    </div>

    <div
      class="card-footer d-flex justify-content-end"
      :class="type === 'dark' ? 'bg-transparent' : ''"
    >
      <!-- <base-pagination total="30"></base-pagination> -->
    </div>
  </div>
</template>
<script>
import $ from 'jquery';
import moment from 'moment';

import 'datatables.net';
import 'datatables.net-dt/css/jquery.dataTables.css';
$(document).ready( function () {
    $('#myTable').DataTable();
} );
import axios from "axios";
export default {
  name: "penjualan-table",
  props: {
    type: {
      type: String,
    },
    title: String,
  },
  data() {
    return {
      tableData: [],
    };
  },
 
  created() {
    this.getPenjualan();
  },
 
  methods: {
    // Get All Products
    async getPenjualan() {
      try {
        const response = await axios.get("http://localhost:5000/penjualan");
        this.tableData = response.data;
        console.log(response.data);

      } catch (err) {
        console.log(err);
        alert(err)
      }
    },
 
    // Delete Product
    async deletePenjualan(id) {
      try {
        await axios.delete(`http://localhost:5000/penjualan/${id}`);
        this.$swal({
            title:"Success!",
            text:"Berhasil Menghapus Data Penjualan!",
            icon:"success",
            button:false,
            timer:3000
        }).then(function(){
            location.href="/sale";
        });
        this.getProduk();
      } catch (err) {
        console.log(err);
      }
    },

    // cari
    async cari() {
      try {
        let tgl_awal = this.tgl_awal;
        let tgl_akhir = this.tgl_akhir;
        const response = await axios.get(`http://localhost:5000/penjualan/${tgl_awal}/${tgl_akhir}`);
        this.tableData = response.data;
        console.log(response.data);
        console.log("asd");
      } catch (err) {
        console.log(err);
        alert(err)
      }
    },

    format_date(value){
      if (value) {
        return moment(String(value)).format('DD MMMM YYYY')
      }
    },
  },
};
// export default {
//   name: "produk-table",
//   props: {
//     type: {
//       type: String,
//     },
//     title: String,
//   },
//   data() {
//     return {
      
//       tableData: [
//         {
//           img: "img/theme/bootstrap.jpg",
//           title: "Argon Design System",
//           budget: "$2500 USD",
//           status: "pending",
//           statusType: "warning",
//           completion: 60,
//         },
//         {
//           img: "img/theme/angular.jpg",
//           title: "Angular Now UI Kit PRO",
//           budget: "$1800 USD",
//           status: "completed",
//           statusType: "success",
//           completion: 100,
//         },
//         {
//           img: "img/theme/sketch.jpg",
//           title: "Black Dashboard",
//           budget: "$3150 USD",
//           status: "delayed",
//           statusType: "danger",
//           completion: 72,
//         },
//         {
//           img: "img/theme/react.jpg",
//           title: "React Material Dashboard",
//           budget: "$4400 USD",
//           status: "on schedule",
//           statusType: "info",
//           completion: 90,
//         },
//         {
//           img: "img/theme/vue.jpg",
//           title: "Vue Paper UI Kit PRO",
//           budget: "$2200 USD",
//           status: "completed",
//           statusType: "success",
//           completion: 100,
//         },
//       ],
//     };
//   },
// };
</script>
<style></style>
