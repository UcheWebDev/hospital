<template>
  <div class="data-table">
    <div class="main-table">
      <table class="table m-b-0 table-hover">
        <thead>
          <tr>
            <!-- <th class="table-head">#</th> -->
            <th
              v-for="column in columns"
              :key="column"
              @click="sortByColumn(column)"
              class="table-head"
            >
              {{ column | columnHead }}
              <span v-if="column === sortedColumn">
                <i v-if="order === 'asc'" class="fas fa-arrow-up"></i>
                <i v-else class="fas fa-arrow-down"></i>
              </span>
            </th>
            <th class="table-head" v-if="updateBtn || RemoveBtn">ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          <tr class="" v-if="tableData.length === 0">
            <td class="lead text-center" :colspan="columns.length + 1">
              No data found.
            </td>
          </tr>
          <tr
            v-for="data in tableData"
            :key="data.id"
            class="m-datatable__row"
            v-else
          >
            <!-- <td>{{ serialNumber(key1) }}</td> -->
            <td v-for="value in data" :key="value.id">{{ value }}</td>
            <td v-if="RemoveBtn">
              <a
                href="#"
                class="btn-style transparent icon red"
                @click="removeData(data)"
                ><i class="fa fa-trash"></i
              ></a>
            </td>
            <td v-if="updateBtn">
              <a
                href="#"
                class="btn-style transparent icon"
                @click="UpdateData(data)"
                ><i class="fa fa-edit"></i
              ></a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <nav v-if="pagination && tableData.length > 0">
      <ul class="pagination">
        <li class="page-item" :class="{ disabled: currentPage === 1 }">
          <a
            class="page-link"
            href="#"
            @click.prevent="changePage(currentPage - 1)"
            >Previous</a
          >
        </li>
        <li
          v-for="page in pagesNumber"
          class="page-item"
          :class="{ active: page == pagination.meta.current_page }"
          :key="page.id"
        >
          <a
            href="javascript:void(0)"
            @click.prevent="changePage(page)"
            class="page-link"
            >{{ page }}</a
          >
        </li>
        <li
          class="page-item"
          :class="{ disabled: currentPage === pagination.meta.last_page }"
        >
          <a
            class="page-link"
            href="#"
            @click.prevent="changePage(currentPage + 1)"
            >Next</a
          >
        </li>
        <span style="margin-top: 8px">
          &nbsp; Displaying {{ pagination.data.length }} of
          {{ pagination.meta.total }} entries.</span
        >
      </ul>
    </nav>
  </div>
</template>

<script type="text/ecmascript-6">
/* eslint-disable */
import axios from "axios";
export default {
  props: {
    fetchUrl: { type: String, required: true },
    columns: { type: Array, required: true },
    updateBtn: { type: Array },
    RemoveBtn: { type: Array },
  },
  data() {
    return {
      tableData: [],
      url: '',
      pagination: {
        meta: { to: 1, from: 1 }
      },
      offset: 4,
      currentPage: 1,
      perPage: 5,
      sortedColumn: this.columns[0],
      order: 'asc'
    }
  },
  watch: {
    fetchUrl: {
      handler: function(fetchUrl) {
        this.url = fetchUrl
      },
      immediate: true
    }
  },
  created() {
   setInterval(() => {
    return this.fetchData()
   },1000)
  },
  computed: {
    /**
     * Get the pages number array for displaying in the pagination.
     * */
    pagesNumber() {
      if (!this.pagination.meta.to) {
        return []
      }
      let from = this.pagination.meta.current_page - this.offset
      if (from < 1) {
        from = 1
      }
      let to = from + (this.offset * 2)
      if (to >= this.pagination.meta.last_page) {
        to = this.pagination.meta.last_page
      }
      let pagesArray = []
      for (let page = from; page <= to; page++) {
        pagesArray.push(page)
      }
      return pagesArray
    },
    /**
     * Get the total data displayed in the current page.
     * */
    totalData() {
      return (this.pagination.meta.to - this.pagination.meta.from) + 1
    }
  },
  methods: {
    fetchData() {
      let dataFetchUrl = `${this.url}?page=${this.currentPage}&column=${this.sortedColumn}&order=${this.order}&per_page=${this.perPage}`
      axios.get(dataFetchUrl)
        .then(({ data }) => {
          this.pagination = data
          this.tableData = data.data
        }).catch(error => this.tableData = [])
    },
    /**
     * Get the serial number.
     * @param key
     * */
    serialNumber(key) {
      return (this.currentPage - 1) * this.perPage + 1 + key
    },
    /**
     * Change the page.
     * @param pageNumber
     */
    changePage(pageNumber) {
      this.currentPage = pageNumber
      this.fetchData()
    },
    /**
     * Sort the data by column.
     * */
    sortByColumn(column) {
      if (column === this.sortedColumn) {
        this.order = (this.order === 'asc') ? 'desc' : 'asc'
      } else {
        this.sortedColumn = column
        this.order = 'asc'
      }
      this.fetchData()
    },
    removeData(value){
      // console.log(value.id)
      this.$emit('remove-item', value.id)
    },
    UpdateData(value){
      this.$emit('edit-item', value)
    }
  },
  filters: {
    columnHead(value) {
      return value.split('_').join(' ').toUpperCase()
    }
  },
  name: 'DataTable'
}
</script>

<style scoped>
.page-item.active .page-link {
  color: #fff;
  background-color: #01d8da;
  border-color: #01d8da;
}
</style>
