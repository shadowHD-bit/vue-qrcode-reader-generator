<template>
  <header>
    <div class="header">
      <div class="container">
        <div class="logo">
          <a href="https://github.com/shadowHD-bit" target="_blank"><i class="fa-brands fa-github"></i></a>
          <span>QR-GENERATOR-READER</span>
        </div>
        <div class="right-buttons">
            <router-link to="/">Main Page</router-link>
            <router-link to="/generate">Generate</router-link>
            <router-link to="/reading">Reading</router-link>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'TheHeader'
}
</script>

<style>
.header{
  height: 70px;
  width: 100%;
  background-color: #6E85D3 ;
  top: 0;
  color: #F1F4F5;
}

.container{
  padding: 0px 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  height: 100%;
}
.fa-github{
  font-size: 40px;
  left: 0;
  cursor: pointer;
}

.fa-github:hover{
  color:#3A3A42;
  transition: all ease .3s;
}
span{
  font-size: 20px;
  margin-left: 10px;
}
.logo{
  display: flex;
  align-items: center;
}

.right-buttons a{
  text-decoration: none;
  color: #F1F4F5;
  margin: 0px 5px;
  border: 2px solid #F1F4F5;
  padding: 5px;
  border-radius: 10px;
}

.right-buttons a:hover{
  background-color: #4C49F2;
  transition: all ease .3s;
}
a{
  color: white;
  text-decoration: none;
}

</style>