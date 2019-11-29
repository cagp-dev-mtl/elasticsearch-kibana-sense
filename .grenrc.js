module.exports = {
    "dataSource": "milestones",
    "prefix": "",
    "onlyMilestones": true,
    "groupBy": {
        "Enhancements:": ["enhancement", "client request"],
        "Bug Fixes:": ["bug"]
    },
    "changelogFilename": "CHANGELOG.md",
    template: {
        commit: function (commit) {
            return `+ ${commit.message} (${commit.url})`;
        },
        issue: function (issue) {
            return `+ ${issue.name} (${issue.text})`;
        },
	label: "[*{{label}}*]",
    },
}

