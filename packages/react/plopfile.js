module.exports = function(plop) {
    plop.setGenerator('component', {
        description: 'generate a react component',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'Name of your component',
            },
        ],
        actions: [
            {
                type: 'add',
                path: 'src/components/{{kebabCase name}}/index.ts',
                templateFile: 'plop-templates/component-index.hbs',
            },
            {
                type: 'add',
                path:
                    'src/components/{{kebabCase name}}/{{properCase name}}.ts',
                templateFile: 'plop-templates/component.hbs',
            },
            {
                type: 'add',
                path:
                    'src/components/{{kebabCase name}}/{{kebabCase name}}.stories.tsx',
                templateFile: 'plop-templates/component-stories.hbs',
            },
        ],
    });
};
