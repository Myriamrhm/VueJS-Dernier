<template>
    <div>
        <br>
        <div id="all">
        <div class="container">
            <img class="icon" src="../assets/question2.svg" alt="" width="18%">

            <label for="uname"><b>Pseudo</b></label>
            <input type="text" placeholder="Enter Pseudo" name="uname" required>

            <label for="mail"><b>Mail</b></label>
            <input type="text" placeholder="Enter Mail" name="mail" required>

            <label for="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" required>
        
            <button type="submit">Login</button>
            <label>
                <input type="checkbox" checked="checked" name="remember"> Remember me
            </label>
        </div>
        </div>
    
    </div>
</template>
<script>
</script>


<style lang="scss" scoped>
#all{
  display: flex;
  justify-content: center;
}
label{
    color: rgb(180, 180, 180);
    font-family: 'Open Sans', sans-serif;
    font-weight:600;
}
input[type=text], input[type=password] {
  width: 80%;
  height: auto;
  background-color:#3b3b3b4f;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid rgb(133, 132, 132);
  border-radius: 5px;
  box-sizing: border-box;
  color: white;
  font-size: 100%;
}
::placeholder{
  color: rgb(180, 180, 180);
}
button {
  background-color: rgb(65, 173, 177);
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 20%;
  border-radius: 5px;
}
button:hover {
  opacity: 0.8;
}
.container {
  padding: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color:#24232385;
  width: 350px;
  border-radius: 5px;
}
</style>

