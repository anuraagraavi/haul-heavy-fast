# Project architecture rules

- Gate temporary whole-site suspension at the top of `App` with one boolean so all original routes and features remain untouched and instantly restorable.