<template>
  <div class="main-app">
    <Header />
    <div class="body-content mt-5 mb-5">
      <div class="container">
        <div class="row">
          <div class="col-md-4 px-md-3 px-4">
            <div class="card-box p-4 text-center mb-4">
              <div class="card-image mb-2">
                <img
                  src="http://via.placeholder.com/400x300"
                  alt="Card Image"
                />
              </div>
              <div class="card-content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <a href="#" class="btn">Read More</a>
              </div>
            </div>
          </div>
          <div class="col-md-4 px-md-3 px-4">
            <div class="card-box p-4 text-center mb-4">
              <div class="card-image mb-2">
                <img
                  src="http://via.placeholder.com/400x300"
                  alt="Card Image"
                />
              </div>
              <div class="card-content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <a href="#" class="btn">Read More</a>
              </div>
            </div>
          </div>
          <div class="col-md-4 px-md-3 px-4">
            <div class="card-box p-4 text-center mb-4">
              <div class="card-image mb-2">
                <img
                  src="http://via.placeholder.com/400x300"
                  alt="Card Image"
                />
              </div>
              <div class="card-content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <a href="#" class="btn">Read More</a>
              </div>
            </div>
          </div>
        </div>
        <div class="row mt-5">
          <Tabs />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./Header";
import Tabs from "./Tabs";
export default {
  name: "Index",
  components: {
    Header,
    Tabs,
  },
};
</script>
