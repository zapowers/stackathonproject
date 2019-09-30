"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "Creature",
    embedded: false
  },
  {
    name: "Encounter",
    embedded: false
  },
  {
    name: "EncounterCreature",
    embedded: false
  },
  {
    name: "Party",
    embedded: false
  },
  {
    name: "SavedParty",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `http://localhost:4466`
});
exports.prisma = new exports.Prisma();
