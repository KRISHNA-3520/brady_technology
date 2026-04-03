module.exports = {
    default: {
      require: ["src/steps/**/*.ts"],
      format: [
        "progress",
        "json:reports/cucumber-report.json"
      ],
      requireModule: ["ts-node/register"],
      timeout: 60000
    }
  };