export const manifest = {
  screens: {
    scr_q93zmu: { name: "Home", route: "/", position: { "x": 160, "y": 220 } },
    scr_1ukna6: { name: "About", route: "/about", position: { "x": 1560, "y": 220 } },
    scr_4139g4: { name: "Courses", route: "/courses", position: { "x": 160, "y": 2200 } },
    scr_l3memq: { name: "Course Detail", route: "/courses/professional-barista", position: { "x": 1560, "y": 2200 } },
    scr_qau96l: { name: "Admissions", route: "/admissions", position: { "x": 160, "y": 4180 } },
    scr_gkxcql: { name: "Career Pathways", route: "/career-pathways", position: { "x": 1560, "y": 4180 } },
    scr_zqd2gb: { name: "FAQs", route: "/faqs", position: { "x": 4360, "y": 220 } },
    scr_vqqp3j: { name: "Contact", route: "/contact", position: { "x": 2960, "y": 220 } },
    scr_krzhyi: { name: "Register Interest", route: "/register", position: { "x": 2960, "y": 4180 } }
  },
  sections: {
    sec_xpbw68: { name: "Core Info Pages", x: 0, y: 0, width: 5720, height: 1180 },
    sec_xilkke: { name: "Courses Explorer", x: 0, y: 1980, width: 2920, height: 1180 },
    sec_7bxm81: { name: "Enrollment & Pathways", x: 0, y: 3960, width: 4320, height: 1180 },
    sec_jwqs4b: { name: "Content Hub", x: 0, y: 5940, width: 1520, height: 1180 }
  },
  layers: [
  { kind: "section", id: "sec_xpbw68", children: [
    { kind: "screen", id: "scr_q93zmu" },
    { kind: "screen", id: "scr_1ukna6" },
    { kind: "screen", id: "scr_vqqp3j" },
    { kind: "screen", id: "scr_zqd2gb" }]
  },
  { kind: "section", id: "sec_xilkke", children: [
    { kind: "screen", id: "scr_4139g4" },
    { kind: "screen", id: "scr_l3memq" }]
  },
  { kind: "section", id: "sec_7bxm81", children: [
    { kind: "screen", id: "scr_qau96l" },
    { kind: "screen", id: "scr_gkxcql" },
    { kind: "screen", id: "scr_krzhyi" }]
  },
  { kind: "section", id: "sec_jwqs4b", children: [
    { kind: "screen", id: "scr_3nsway" }]
  }]

};