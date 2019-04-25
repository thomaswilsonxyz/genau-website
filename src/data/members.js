const members = [
  {
    name: "Maika Klaukien",
    role: "Director",
    fileName: "maika",
  },
  {
    name: "Thomas Wilson",
    role: "Producer & Dancer",
    fileName: "thomas",
  },
  {
    name: "Akane Abe",
    role: "Dancer & Choreographer",
    fileName: "akane",
  },
  {
    name: "Carla Gonclaves",
    role: "Dancer & Rehearsal Director",
    fileName: "carla",
  },
  {
    name: "Pauline S",
    role: "Dancer",
    fileName: "pauline",
  },
  {
    name: "Davide",
    role: "Dancer",
    fileName: "davide",
  },
  {
    name: "Rina Wako",
    role: "Dancer",
    fileName: "rina",
  },
  {
    name: "Maaya Agame",
    role: "Dancer",
    fileName: "maaya",
  },
  {
    name: "Sam",
    role: "Lighting Designer",
    fileName: "sam",
  },
  {
    name: "Michael Haslam",
    role: "Music Director",
    fileName: "michael",
  },
  {
    name: "Lynne Gentle",
    role: "Musician",
    fileName: "lynne",
  },
  {
    name: "So",
    role: "Musician",
    fileName: "so",
  },
]

export const getMemberDetails = fileName =>
  members.filter(m => m.fileName === fileName)[0]
export default members
