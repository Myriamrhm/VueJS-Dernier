<template>
    <div class="blo">
        <button class="btn1">Voir la liste des joueurs</button>
        <TableUsers></TableUsers>
        <UserInfos></UserInfos>
    </div>
</template>

<script>
import TableUsers from '@/components/TableUsers.vue'
import UserInfos from '@/components/UserInfos.vue'
export default {
    components: {
        TableUsers,
        UserInfos
    }

}
</script>

<style lang="scss" scoped>
.blo{
    background-image: url("../assets/admin.jpg");
    height: 900px;
    margin-top: -100px;
    margin-right: -8px;
    margin-left: -8px;
    padding-top: 400px;
}
.btn1 {
  background-color: rgb(65, 173, 177);
  color: white;
  padding: 14px 20px;
  border: none;
  cursor: pointer;
  width: 20%;
  border-radius: 5px;
}

</style>
