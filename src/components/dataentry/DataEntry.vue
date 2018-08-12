<template>
    <div>
        <div class="ui icon red menu">
            <div class="item group-list-item">
                <group-list></group-list>
            </div>
            <div class="item assessment-list-item">
                <!-- <sui-dropdown :options="countries" placeholder="Choose an assessment..." search></sui-dropdown> -->
                <assessment-list></assessment-list>
            </div>
            <a href="#" class="item" @click="showHOT = !showHOT"><i class="sync icon"></i></a>
            <div class="item">
                <div class="ui toggle checkbox">
                    <input type="checkbox" name="public" v-model="allowEdit">
                    <label>Autosave</label>
                </div>
            </div>
        </div>
        <HotTable :root="root" :settings="hotSettings" v-if="showHOT" :readOnly="!allowEdit"></HotTable>
        <div class="ui icon message" v-else>
            <i class="edit outline icon"></i>
            <div class="content">
                <div class="header">Please choose an assessment and group to load the data entry spreadsheet.</div>
            </div>
            
        </div>
        
    </div>
</template>

<script>

import HotTable from '@handsontable/vue'
import Handsontable from 'handsontable'
import AssessmentList from '../shared/AssessmentList.vue'
import GroupList from '../shared/GroupList.vue'


export default {
    components: {
        HotTable,
        AssessmentList,
        GroupList
    },
    data: function() {
    return {
        allowEdit: false,
        showHOT: false,
        root: "test-hot",
      hotSettings: {
        data: Handsontable.helper.createSpreadsheetData(50, 27),
        colHeaders: true,
        rowHeaders: true,
        readOnly: !this.allowEdit,
      }
    };
  },
}
</script>

<style scoped>
.ui.dropdown .menu {
    z-index: 102;
    background-color: red;
}
</style>

<style>
    .ht_clone_top, .ht_clone_left, .ht_clone_top_left_corner {
        z-index: auto;
    }
</style>

<style scoped>
    .assessment-list-item {
        max-width: 30%;
        min-width: 380px;
    }
    .group-list-item {
        max-width: 15%;
        min-width: 200px;
    }
</style>
