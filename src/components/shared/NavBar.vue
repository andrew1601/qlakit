<template>
    <div class="ui menu inverted fixed">
        <div class="header item">
            QLAKit
        </div>
        <router-link to="/" active-class="active" class="item" exact>Home</router-link>
        <router-link to="/analysis" active-class="active" class="item">Analysis</router-link>
        <router-link to="/entry" active-class="active" class="item">Data Entry</router-link>
        <div class="ui dropdown simple item">
            Admin
            <i class="dropdown icon"></i>
            <div class="menu">
                <router-link to="/assessments" active-class="active" class="item">Assessments</router-link>
                <div class="item">Groups</div>
                <div class="item">Students</div>
            </div>
        </div>
        <div class="right menu">
            <a href="" class="item">Logout</a>
        </div>
    </div>
</template>