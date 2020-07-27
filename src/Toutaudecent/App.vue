<template>
  <div id="app">
    <details v-for="(stat,i) in stats" :key="i" open>
      <summary :style="`background:${stat.color[0]}`" class="flex" :title="stat.desc">
        <span class="grow text-right">{{stat.name}}:</span>
        <input
          :value="stat.value"
          @input="stats_input($event,$event.target,stats,i,-1,0)"
          type="range"
          min="0"
          max="100"
          step="5"
        >
        <input
          :value="stat.value"
          @input="stats_input($event,$event.target,stats,i,-1,0)"
          type="number"
          min="0"
          max="100"
          step="5"
        >
      </summary>
      <ul v-for="(car,j) in stat.child" :key="j" :style="`background:${stat.color[1]}`">
        <li class="flex" :title="car.desc">
          <span class="grow text-right">{{car.name}}</span>
          <input
            :value="car.value"
            @input="cars_input($event,$event.target,stat.child,j,-1,0)"
            type="range"
            min="0"
            max="100"
            step="5"
          >
          <input
            :value="car.value"
            @input="cars_input($event,$event.target,stat.child,j,-1,0)"
            type="number"
            min="0"
            max="100"
            step="5"
          >
        </li>
      </ul>
    </details>
  </div>
</template>

<script>
export default {
  data() {
    let base = 40;
    return {
      minimum: 0,
      maximum: 75,
      stats: [
        {
          name: "Physique",
          desc: "Caracteristiques relative à l'état physique",
          value: base,
          color: ["#ea9999", "#f4cccc"],
          child: [
            {
              name: "Force",
              desc: "Capacité de fournir un effort physique",
              value: base
            },
            {
              name: "Endurance",
              desc:
                "Capacité de maintenir dans le temps un certain niveau d'intensité exigée",
              value: base
            },
            {
              name: "Constitution",
              desc:
                "Capacité de resister aux chocs, efforts intenses, maladies et poisons",
              value: base
            }
          ]
        },
        {
          name: "Adresse",
          desc: "Caracteristiques relative à l'adresse",
          value: base,
          color: ["#b7b7b7", "#d9d9d9"],
          child: [
            {
              name: "Discretion",
              desc: "Capacité à effectuer des actions discretement",
              value: base
            },
            {
              name: "Agilité",
              desc: "Capacité à se mouvoir promptement, souplement",
              value: base
            },
            {
              name: "Dexterité",
              desc: "Capacité à effectuer des actes impliquant de la précision",
              value: base
            }
          ]
        },
        {
          name: "Mental",
          desc: "Caracteristiques relative au mental",
          value: base,
          color: ["#a4c2f4", "#c9daf8"],
          child: [
            {
              name: "Savoir",
              desc: "Capacité à se mouvoir discretement",
              value: base
            },
            {
              name: "Perception",
              desc: "Capacité à se mouvoir discretement",
              value: base
            },
            {
              name: "Genie",
              desc: "Capacité à se mouvoir discretement",
              value: base
            }
          ]
        },
        {
          name: "Social",
          value: base,
          color: ["#ffe599", "#fff2cc"],
          child: [
            { name: "Relation", value: base },
            { name: "Presence", value: base },
            { name: "Tromperie", value: base }
          ]
        },
        {
          name: "Métaphysique",
          value: base,
          color: ["#b6d7a8", "#d9ead3"],
          child: [
            { name: "Spiritualité", value: base },
            { name: "Chance", value: base },
            { name: "Sanité", value: base }
          ]
        }
      ]
    };
  },
  methods: {
    stats_input(event, target, stats, i, s, diff = 0) {
      let stat = stats[i];
      let oldValue = stat.value;
      let newValue = Number(target.value) + diff;

      if (newValue > this.maximum) newValue = this.maximum;
      if (newValue < 0) newValue = 0;
      diff += oldValue - newValue;

      let force = false;
      if (s === i) force = true;
      if (s < 0) s = i;

      console.log(`stat ${oldValue} => ${newValue} + ${diff}`);
      let j = i + 1;
      if (j === stats.length) j = 0;
      if (diff !== 0) this.stats_input(event, stats[j], stats, j, s, diff);
      if (oldValue !== newValue) {
        for (const [k, car] of stat.child.entries()) {
          //car.value += newValue - oldValue;
          this.cars_input(car, car, stat.child, k, -1, newValue - oldValue);
        }
        stat.value = newValue;
        if (force && event.preventDefault) event.preventDefault();
      }
    },
    cars_input(event, target, cars, i, s, diff = 0) {
      let car = cars[i];
      let oldValue = car.value;
      let newValue = Number(target.value) + diff;

      if (newValue > this.maximum) newValue = this.maximum;
      if (newValue < 0) newValue = 0;
      diff += oldValue - newValue;

      let force = false;
      if (s === i) force = true;
      if (s < 0) s = i;

      console.log(`car ${oldValue} => ${newValue} + ${diff}`);
      let j = i + 1;
      if (j === cars.length) j = 0;
      if (oldValue !== newValue) {
        car.value = newValue;
        if (force && event.preventDefault) {
          event.preventDefault();
        }
      }
      if (diff !== 0) this.cars_input(event, cars[j], cars, j, s, diff);
    }
  }
};
</script>
<style>
.flex {
  display: flex;
}
.flex > .grow {
  flex-grow: 1;
}
.text-right {
  text-align: right;
}
details > summary {
  list-style: none;
}
details > summary::-webkit-details-marker {
  display: none;
}
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
</style>
