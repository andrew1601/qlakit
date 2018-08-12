<template>
    <div>
        <h1>Assessment Manager</h1>
        <div class="ui grid">
            <div class="four wide column">
                <div class="ui top attached icon menu">
                    <div class="borderless item">
                        <h3>Assessment List</h3>
                    </div>
                    <div class="right aligned link item">
                        <i class="plus square outline icon"></i>
                    </div>
                </div>
                <div class="ui attached segment">
                    <v-jstree :data="treeData" @item-click="itemClick"></v-jstree>
                </div>
            </div>
            <div class="twelve wide column">
                <router-view></router-view>
            </div>
        </div>
        
    </div>
</template>

<script>

import AssessmentList from '../../Shared/AssessmentList.vue';
import VJstree from 'vue-jstree';

export default {
    components: {
        AssessmentList,
        VJstree
    },
    methods: {
        itemClick(node, item, e) {
            if(item.type === "assessment"){
                this.$router.push('/assessments/6');
            }
        }
    },
    data() {
        return {
            treeData: [{
                "text": "Item 1",
                "children": [
                    {
                        icon: "file alternate outline icon",
                        text: "Child 1",
                        type: "assessment"
                    },
                    {
                        "icon": "file alternate outline icon",
                        "text": "Child 2",
                    },
                    {
                        "icon": "file alternate outline icon",
                        "text": "Child 3 ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ",
                    }
                ]
            },
            {
                "text": "Item 2",
                "children": [
                    {
                        "icon": "file alternate outline icon",
                        "text": "Child 1",
                    },
                    {
                        "icon": "file alternate outline icon",
                        "text": "Child 2",
                    },
                    {
                        "icon": "file alternate outline icon",
                        "text": "Child 3",
                    }
                ]
            },
            {
                "text": "Item 3",
                "children": [
                    {
                        "icon": "file alternate outline icon",
                        "text": "Child 1",
                    },
                    {
                        "icon": "file alternate outline icon",
                        "text": "Child 2",
                    },
                    {
                        "icon": "file alternate outline icon",
                        "text": "Child 3",
                    }
                ]
            },
            {
                "text": "Item 1",
                "children": [
                    {
                        "icon": "file alternate outline icon",
                        "text": "Child 1",
                    },
                    {
                        "icon": "file alternate outline icon",
                        "text": "Child 2",
                    },
                    {
                        "icon": "file alternate outline icon",
                        "text": "Child 3 ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ",
                    }
                ]
            },
            {
                "text": "Item 2",
                "children": [
                    {
                        "icon": "file alternate outline icon",
                        "text": "Child 1",
                    },
                    {
                        "icon": "file alternate outline icon",
                        "text": "Child 2",
                    },
                    {
                        "icon": "file alternate outline icon",
                        "text": "Child 3",
                    }
                ]
            },
            {
                "text": "Item 3",
                "children": [
                    {
                        "icon": "file alternate outline icon",
                        "text": "Child 1",
                    },
                    {
                        "icon": "file alternate outline icon",
                        "text": "Child 2",
                    },
                    {
                        "icon": "file alternate outline icon",
                        "text": "Child 3",
                    }
                ]
            },
            {
                "text": "Item 1",
                "children": [
                    {
                        "icon": "file alternate outline icon",
                        "text": "Child 1",
                    },
                    {
                        "icon": "file alternate outline icon",
                        "text": "Child 2",
                    },
                    {
                        "icon": "file alternate outline icon",
                        "text": "Child 3 ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ",
                    }
                ]
            },
            {
                "text": "Item 2",
                "children": [
                    {
                        "icon": "file alternate outline icon",
                        "text": "Child 1",
                    },
                    {
                        "icon": "file alternate outline icon",
                        "text": "Child 2",
                    },
                    {
                        "icon": "file alternate outline icon",
                        "text": "Child 3",
                    }
                ]
            },
            {
                "text": "Item 3",
                "children": [
                    {
                        "icon": "file alternate outline icon",
                        "text": "Child 1",
                    },
                    {
                        "icon": "file alternate outline icon",
                        "text": "Child 2",
                    },
                    {
                        "icon": "file alternate outline icon",
                        "text": "Child 3",
                    }
                ]
            }]
        }
    }
}
</script>

<style>

.vue-treeselect__menu {
    min-width: 300px;
}
</style>
