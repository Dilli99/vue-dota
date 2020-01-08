<template>
  <div>
    <nav class="navbar navbar-expand-lg">
      <ul class="snip1164">
        <li class="current">
          <router-link tag="a" to="/" data-hover="Home">Home</router-link>
        </li>
        <li>
          <router-link tag="a" to="/players" data-hover="Players"
            >Players</router-link
          >
        </li>
        <li>
          <router-link tag="a" to="/matches" data-hover="Matches"
            >Matches</router-link
          >
        </li>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Raleway:400, 500, 800);

nav {
  background-color: #212121;
  height: 4em;
}
.snip1164 {
  font-family: "Raleway", Arial, sans-serif;
  text-align: center;
  text-transform: uppercase;
  font-weight: 500;
}

.snip1164 * {
  box-sizing: border-box;
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
}

.snip1164 li {
  display: inline-block;
  list-style: outside none none;
  margin: 0 1em;
  overflow: hidden;
}

.snip1164 a {
  padding: 0.3em 0.8em;
  color: rgba(255, 255, 255, 0.7);
  position: relative;
  display: inline-block;
  letter-spacing: 1px;
  margin: 0;
  text-decoration: none;
}

.snip1164 a:before,
.snip1164 a:after {
  position: absolute;
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
}

.snip1164 a:before {
  bottom: 100%;
  display: block;
  height: 3px;
  width: 100%;
  content: "";
}

.snip1164 a:after {
  padding: 0.3em 0.8em;
  position: absolute;
  bottom: 100%;
  left: 0;
  content: attr(data-hover);
  color: white;
  white-space: nowrap;
  background-color: #2980b9;
}

.snip1164 li:hover a,
.snip1164 .current a {
  transform: translateY(100%);
}
</style>
