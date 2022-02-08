
/**
 * Every generated backup file gets this extension
 * @type {string}
 */
const BACKUPFILE_EXTENSION = 'rbgen';
module.exports = function (plop) {
    plop.setGenerator('component', {
        description: 'Creating new react components',
        prompts: [{
            type: 'list',
            name: "input",
            message: 'Choose your component',
            choices: ['Component','Container'],
        },
        {
            type: "input",
            name: "name"
        }
        ],
        actions: function (data) {
            const actions = [];
      if (data.input === 'Component') {
            actions.push(
                {
                   type: 'add', //adding file to your propject
                   templateFile: 'src/plop-templates/component.hbs',
                   path: 'src/app/component/{{pascalCase name}}/index.js' //component path
                }
            )
            actions.push(
                {
                   type: 'add', //adding file to your propject
                   path: 'src/app/component/{{pascalCase name}}/style.css' //component path
                }
            )
      } else {
          actions.push(
                 {
                   type: 'add',
                   templateFile: 'src/plop-templates/container.hbs',
                   path: 'src/app/container/{{pascalCase name}}/index.js'
                 }
             )
             actions.push(
                {
                   type: 'add', //adding file to your propject
                   path: 'src/app/container/{{pascalCase name}}/style.css' //component path
                }
            )
            }
            return actions;
        }
    });
    
};