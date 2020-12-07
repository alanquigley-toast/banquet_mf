# Apollo Library SPA

This is a Webpack Module Federation based SPA. Its exposes components that have full API interfaces to a specific graphql server.

MyApolloProvider - This exports the a Apollo provider that can be shared between MF multiple SPAs.
AddUserForm, Users and Books are connected components can be shared at run time between MF multiple SPAs.

SPAs consume the Library SPA by defining it in the module federation plugin remotes config.
