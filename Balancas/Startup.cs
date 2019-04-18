using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Balancas.Startup))]
namespace Balancas
{
    public partial class Startup {
        public void Configuration(IAppBuilder app) {
            ConfigureAuth(app);
        }
    }
}
