/*
 * Modified By mjsz<mjsz@azpro.cn>
 * Modify:
 * 将 theme-defult 修改为 theme-azpro
 * 
 */
module.exports = {
    hooks: {
        config: function(config) {
            config.styles = config.styles || config.pluginsConfig['theme-azpro'].styles;

            return config;
        }
    }
};


