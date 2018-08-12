<template>
    <div>
        <div class="ui top attached tabular menu">
                    <router-link to="/assessments/6" class="item" active-class="active" exact>Overview</router-link>
                    <router-link to="/assessments/6/paper/1" class="item" active-class="active">Paper 1</router-link>
                    <router-link to="/assessments/6/paper/2" class="item" active-class="active">Paper 2</router-link>
                    <router-link to="/assessments/6/paper/3" class="item" active-class="active">Paper 3</router-link>
        </div>
        <div class="ui bottom attached active tab segment">
            <router-view></router-view>
        </div>
    </div>
</template>
