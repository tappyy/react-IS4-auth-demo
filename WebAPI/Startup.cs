using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;

namespace ClientApi
{
    public class Startup
    {
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors();

            services.AddMvcCore()
                .AddAuthorization()
                .AddJsonFormatters();

            // adds DI services to DI and configures bearer as the default scheme
            services.AddAuthentication("Bearer")
                .AddJwtBearer("Bearer", options =>
                {
                    // identity server issuing token
                    options.Authority = "http://localhost:5000";
                    options.RequireHttpsMetadata = false;

                    // the scope id of this api
                    options.Audience = "bebopclientapi";
                });
        }

        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            app.UseCors(builder =>
                 builder
                   .WithOrigins("http://localhost:3000")
                   .AllowAnyHeader()
                   .AllowAnyMethod()
                   .AllowCredentials()
               );
            // adds authentication middleware to the pipeline so authentication will be performed on every request
            app.UseAuthentication();
            app.UseMvc();

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.Run(async (context) =>
            {
                await context.Response.WriteAsync("Hello World!");
            });
        }
    }
}
