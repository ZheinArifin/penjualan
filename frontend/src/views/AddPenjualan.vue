<template>
  <div>
    <base-header type="gradient-success" class="pb-6 pb-8 pt-5 pt-md-8">
      <!-- Card stats -->
      <div class="row">
        <div class="col-xl-3 col-lg-6">
          <stats-card
            title="Total traffic"
            type="gradient-red"
            sub-title="350,897"
            icon="ni ni-active-40"
            class="mb-4 mb-xl-0"
          >
            <template v-slot:footer>
              <span class="text-success mr-2"
                ><i class="fa fa-arrow-up"></i> 3.48%</span
              >
              <span class="text-nowrap">Since last month</span>
            </template>
          </stats-card>
        </div>
        <div class="col-xl-3 col-lg-6">
          <stats-card
            title="Total traffic"
            type="gradient-orange"
            sub-title="2,356"
            icon="ni ni-chart-pie-35"
            class="mb-4 mb-xl-0"
          >
            <template v-slot:footer>
              <span class="text-success mr-2"
                ><i class="fa fa-arrow-up"></i> 12.18%</span
              >
              <span class="text-nowrap">Since last month</span>
            </template>
          </stats-card>
        </div>
        <div class="col-xl-3 col-lg-6">
          <stats-card
            title="Sales"
            type="gradient-green"
            sub-title="924"
            icon="ni ni-money-coins"
            class="mb-4 mb-xl-0"
          >
            <template v-slot:footer>
              <span class="text-danger mr-2"
                ><i class="fa fa-arrow-down"></i> 5.72%</span
              >
              <span class="text-nowrap">Since last month</span>
            </template>
          </stats-card>
        </div>
        <div class="col-xl-3 col-lg-6">
          <stats-card
            title="Performance"
            type="gradient-info"
            sub-title="49,65%"
            icon="ni ni-chart-bar-32"
            class="mb-4 mb-xl-0"
          >
            <template v-slot:footer>
              <span class="text-success mr-2"
                ><i class="fa fa-arrow-up"></i> 54.8%</span
              >
              <span class="text-nowrap">Since last month</span>
            </template>
          </stats-card>
        </div>
      </div>
    </base-header>

    <div class="container-fluid mt--7">
      <div class="row">
        <div class="col">
            <div class="card p-5">
                <div class="field mb-3">
                    <label class="label">Nama Barang</label>
                    <div class="control">
                        <select name="barang_id" required v-model="barang" @change="onChangeChain" class="form-control" style="color:black">
                          <option  style="color:black">-- Pilih Barang --</option>
                          <option  style="color:black" v-for="link in barangs" :value="link.id" :key="link.id">{{link.nama_barang}}</option>
                        </select>
                    </div>
                </div>
                
                <div class="field mb-3">
                    <label class="label">Jumlah</label>
                    <div class="control">
                        <input
                        required
                        class="form-control"
                        type="text"
                        placeholder="Jumlah"
                        v-model="jumlah"
                        style="color:black"
                        onkeypress="return /[0-9]/i.test(event.key)"
                        />
                    </div>
                </div>
                
                <div class="field mb-3">
                    <label class="label">Tanggal Transaksi</label>
                    <div class="control">
                        <input
                        required
                        class="form-control"
                        type="date"
                        placeholder="Kategori"
                        v-model="tgl"
                        style="color:black"
                        />
                    </div>
                </div>

                <div class="control">
                    <button class="btn btn-success" @click="savePenjualan">Simpan</button>
                    <router-link class="btn btn-danger" to="/sale">Kembali</router-link>
                </div>
            </div>
            
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "AddPenjualan",
  data() {
    return {
      barang: "",
      jumlah: "",
      tgl: "",
      barangs : [],
    };
  },
  created() {
    this.getProduk();
  },
  methods: {
    
    async getProduk() {
      try {
        const response = await axios.get("http://localhost:5000/produk");
        this.barangs = response.data;
        console.log(response.data);

      } catch (err) {
        console.log(err);
        alert(err)
      }
    },
    // Update product
    async savePenjualan() {
      try {
        await axios.post(`http://localhost:5000/penjualan`,
          {
            id_barang : this.barang,
            jumlah : this.jumlah,
            tanggal_transaksi : this.tgl,
          }
        );
        this.barang = "";
        this.jumlah = "";
        this.tgl = "";
        this.$swal({
            title:"Success!",
            text:"Berhasil Menambahakan Data Penjualan!",
            icon:"success",
            button:false,
            timer:3000
        }).then(function(){
            location.href="/sale";
        });;
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
<style></style>
