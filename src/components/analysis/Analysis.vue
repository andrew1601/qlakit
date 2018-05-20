<template>
    <div class="ui grid">
        <div class="sixteen wide column">
            <div class="ui block header">Assessment Analysis</div>
        </div>
        <div class="four wide column">
                <div class="ui top attached segment">
                    Andrew POPE
                    <div class="ui black label">10R/Ma2</div>
                </div>
                <div class="ui attached segment">
                    <sui-progress percent="67" color="blue" size="small" label="Paper 1" progress></sui-progress>
                    <sui-progress percent="32" color="blue" size="small" label="Paper 2" progress></sui-progress>
                    <sui-progress percent="85" color="blue" size="small" label="Paper 3" progress></sui-progress>
                </div>
                <div class="ui attached segment">
                    <div class="ui statistics">
                        <div class="blue statistic">
                            <div class="value">187</div>
                            <div class="label">Marks</div>
                        </div>
                        <div class="blue statistic">
                            <div class="value">6</div>
                            <div class="label">Grade</div>
                        </div>
                    </div>
                    <div class="ui blue statistic">
                        <div class="value">34</div>
                        <div class="label">Marks to Indicative</div>
                    </div>
                </div>
                <h4 class="ui attached block header">Grade Boundaries</h4>
                <table class="ui bottom attached basic table">
                    <tbody>
                        <tr>
                            <td>Cell</td>
                            <td>Cell</td>
                        </tr>
                        <tr>
                            <td>Cell</td>
                            <td>Cell</td>
                        </tr>
                        <tr>
                            <td>Cell</td>
                            <td>Cell</td>
                        </tr>                        
                    </tbody>
                </table>
        </div>
        <div class="twelve wide column">
            <div class="ui top attached tabular menu">
                <router-link to="/analysis" class="item" active-class="active" exact>Overview</router-link>
                <router-link to="/analysis/paper/1" class="item" active-class="active" exact>Paper 1</router-link>
                <router-link to="/analysis/paper/2" class="item" active-class="active" exact>Paper 2</router-link>
                <router-link to="/analysis/paper/3" class="item" active-class="active" exact>Paper 3</router-link>
            </div>
            <div class="ui bottom attached active tab segment">
                <router-view></router-view>
            </div>
            
        </div>
    </div>
</template>

<script>
export default {

}
</script>


<style scoped>
    .ui.black.label {
        margin-left: 0.5rem;
    }
</style>

