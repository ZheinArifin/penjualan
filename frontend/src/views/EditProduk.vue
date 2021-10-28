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
                        <input
                        class="form-control"
                        type="text"
                        placeholder="Product Name"
                        v-model="nama_barang"
                        style="color:black"
                        />
                    </div>
                </div>
                
                <div class="field mb-3">
                    <label class="label">Stok</label>
                    <div class="control">
                        <input
                        class="form-control"
                        type="text"
                        placeholder="Price"
                        v-model="stok"
                        style="color:black"
                        />
                    </div>
                </div>
                
                <div class="field mb-3">
                    <label class="label">Kategori</label>
                    <div class="control">
                        <input
                        class="form-control"
                        type="text"
                        placeholder="Stok"
                        v-model="kategori"
                        style="color:black"
                        />
                    </div>
                </div>

                <div class="control">
                    <button class="btn btn-success" @click="updateProduk">UPDATE</button>
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
  name: "EditProduct",
  data() {
    return {
      nama_barang: "",
      stok: "",
      kategori: "",
    };
  },
  created: function () {
    this.getProdukById();
  },
  methods: {
    // Get Product By Id
    async getProdukById() {
      try {
        const response = await axios.get(
          `http://localhost:5000/produk/${this.$route.params.id}`
        );
        this.nama_barang = response.data.nama_barang;
        this.stok = response.data.stok;
        this.kategori = response.data.kategori;
      } catch (err) {
        console.log(err);
      }
    },
 
    // Update product
    async updateProduk() {
      try {
        await axios.put(`http://localhost:5000/produk/${this.$route.params.id}`,
          {
            nama_barang : this.nama_barang,
            stok : this.stok,
            kategori : this.kategori,
          }
        );
        this.nama_barang = "";
        this.jumlah = "";
        this.kategori = "";
        this.$router.push("/products");
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
<style></style>
