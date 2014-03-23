var watch, face1, face2, face3, pointer1, pointer2, pointer3, text, button, mech;

AJS.setClearColor(0, 0, 0);

AJS.createRectangleActor(360, 640, 720, 1280)
.setTexture("bg").setLayer(0);

watch = AJS.createRectangleActor(410, 385, 626, 977)
.setTexture("watch").setLayer(1);

mech = AJS.createRectangleActor(350 - 700, 540 + 700, 393, 385)
.setTexture("mechanics").setLayer(2);

face3 = AJS.createRectangleActor(302 - 700, 461 + 700, 119, 115)
.setTexture("face3").setLayer(3);
face2 = AJS.createRectangleActor(390 - 700, 616 + 700, 118, 111)
.setTexture("face2").setLayer(3);
face1 = AJS.createRectangleActor(352 - 700, 537 + 700, 390, 375)
.setTexture("face1").setLayer(3);

pointer3 = AJS.createRectangleActor(310 - 700, 575 + 700, 86, 101)
.setTexture("pointer3").setLayer(4);
pointer2 = AJS.createRectangleActor(295 - 700, 615 + 700, 436, 168)
.setTexture("pointer2").setLayer(5);
pointer1 = AJS.createRectangleActor(289 - 700, 493 + 700, 177, 204)
.setTexture("pointer1").setLayer(6);

button = AJS.createRectangleActor(620, 100, 133, 134)
.setTexture("button").setLayer(1);

text = AJS.createRectangleActor(360, 1100 + 700, 626, 304)
.setTexture("text").setLayer(6);

// Assemble watch
mech.move(350, null, 1800, 150);
mech.move(null, 540, 1800, 150, [{ x: 0.25, y: 1170 }, { x: 0.25, y: 540 }]);
face3.move(302, null, 1800, 450);
face3.move(null, 461, 1800, 450, [{ x: 0.25, y: 1091 }, { x: 0.25, y: 461 }]);
face2.move(390, null, 1800, 750);
face2.move(null, 616, 1800, 750, [{ x: 0.25, y: 1246 }, { x: 0.25, y: 616 }]);
face1.move(352, null, 1800, 1250);
face1.move(null, 537, 1800, 1250, [{ x: 0.25, y: 1167 }, { x: 0.25, y: 537 }]);
pointer3.move(310, null, 1800, 1750);
pointer3.move(null, 575, 1800, 1750, [{ x: 0.25, y: 1200 }, { x: 0.25, y: 575 }]);
pointer2.move(295, null, 1800, 2250);
pointer2.move(null, 615, 1800, 2250, [{ x: 0.25, y: 1240 }, { x: 0.25, y: 615 }]);
pointer1.move(289, null, 1800, 2750);
pointer1.move(null, 493, 1800, 2750, [{ x: 0.25, y: 1362 }, { x: 0.25, y: 493 }]);

// Bring text in
text.move(360, 1100, 500, 4500);
