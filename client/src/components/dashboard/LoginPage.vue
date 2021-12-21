<template>

    <div class="container">
      <div class="login-wrap">
        <div class="row justify-content-center d-flex">
          <div class="col-xl-10 col-lg-12 col-md-9">
            <div class="card shadow-lg my-5 d-flex">
              <div class="card-body p-0">
                <div class="row">
                  <div class="col-lg-5">
                    <div class="text-center">
                      <h2 class="p-3 logo-text">CLARKE FARM</h2>
                    </div>
                    <div class="auth text-center" style="margin-left:30px;">
                      <h6 class="mt-4 login-heading">Login</h6>
                        <div class="auth-form">
                          <div>
                            <h6 class="text-center text-muted mb-3 ">
                              Welcome Back, Login to  get Started</h6>
                              <form class="col-12">
                                <div class="mb-3 ml-3">
                                  <div class="form-floating relative mb-2">
                                  <input type="email" class="form-control" name=email>
                                  <label for="email">Email Address</label>
                                  </div>
                                </div>
                                <div class="mb-3 text-left ">
                                  <div class="form-floating mb-2">
                                  <input type="password" class="form-control" name="password">
                                  <label for="password">Password</label>
                                  </div>
                                </div>
                              </form>
                              <div>
                                  <button type="submit" class="btn  login-btn btn-block">
                                    Login</button>
                              </div>
                              <hr>
                              <div class="form-check terms">
                                <input type="checkbox" class="form-check-input" id="loggedin-check">
                                <label class="form-check-label text-muted"
                                for="loggedin-check" > keep me logged in</label>
                              </div>
                              <div class="go-to-home mb-3">
                                  <router-link to="/">
                                  <button type="submit" class="btn btn-outline-secondary  btn-block">
                                    Go to Home Page</button>
                                  </router-link>
                              </div>
                          </div>

                        </div>
                    </div>
                  </div>
                  <!-- image-div  -->
                  <div class="col-lg-7">
                    <img src="@/assets/images/forestwalk.jpg" >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

</template>
<script>
export default {
  name: 'LoginPage',
};
</script>
<style scoped>
.login-wrap{
  width:100%;
  min-height: 100vh;
}
.logo-text{
  color:var(--blue-ink);
  font-family: Playfair;
}
.form-floating{
  position: relative;
  margin-top: 20px;
}
button{
  width:100%;
  border-radius: 4px;
}
.terms{
  float: left;
  font-size: 13px;
}
.go-to-home{
  margin-top: 100px;
}
.login-heading{
  color: #068d68;
}
.login-btn{
  background-color: #068d68;
  color: whitesmoke;

 }
 img{
   height:100vh;
   width: 100%;
   background-position: 50%;
   background-size: cover;
   border-radius: 5px 0 0 5px;
 }
 @media (min-width: 9922px){
   .col-lg-7{
     width:58%;
     flex:0 0 auto;
     display: block !important;
   }
 }
</style>
