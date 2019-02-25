<template>
<div class="view view-scan-list">
    <el-table
      :data="tableData"
      v-loading="loading"
      style="width: 100%">
        <el-table-column
            prop="date"
            label="日期"
            width="180"
        >
        </el-table-column>
        <el-table-column
            prop="name"
            label="姓名"
            width="180"
        >
        </el-table-column>
        <el-table-column
            prop="address"
            label="地址"
        >
        </el-table-column>
    </el-table>
    <el-pagination
        background
        layout="prev, pager, next"
        :total="1000">
    </el-pagination>
</div>
</template>
<script>
export default {
}
</script>
