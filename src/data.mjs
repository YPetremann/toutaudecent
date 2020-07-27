export default function() {
  return {
    stats: [
      {
        name: "Physique",
        value: 40,
        color: ["#ea9999", "#f4cccc"],
        child: [
          { name: "Force", value: 40 },
          { name: "Endurance", value: 40 },
          { name: "Constitution", value: 40 }
        ]
      },
      {
        name: "Adresse",
        value: 40,
        color: ["#b7b7b7", "#d9d9d9"],
        child: [
          { name: "Discretion", value: 40 },
          { name: "Agilité", value: 40 },
          { name: "Habilité", value: 40 }
        ]
      },
      {
        name: "Mental",
        value: 40,
        color: ["#a4c2f4", "#c9daf8"],
        child: [
          { name: "Savoir", value: 40 },
          { name: "Perception", value: 40 },
          { name: "Genie", value: 40 }
        ]
      },
      {
        name: "Social",
        value: 40,
        color: ["#ffe599", "#fff2cc"],
        child: [
          { name: "Relation", value: 40 },
          { name: "Presence", value: 40 },
          { name: "Tromperie", value: 40 }
        ]
      },
      {
        name: "Métaphysique",
        value: 40,
        color: ["#b6d7a8", "#d9ead3"],
        child: [
          { name: "Spiritualité", value: 40 },
          { name: "Chance", value: 40 },
          { name: "Sanité", value: 40 }
        ]
      }
    ]
  };
}
