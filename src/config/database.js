module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'esporte',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
