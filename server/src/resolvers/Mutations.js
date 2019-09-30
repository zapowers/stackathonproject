const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

function createCreature(parent, args, context) {
  return context.prisma.createCreature({
    name: args.name,
  })
}
