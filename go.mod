module github.com/hugolify/hugolify-template

go 1.21

replace (
	github.com/hugolify/hugolify-admin => ../../hugolify/hugolify-admin
	github.com/hugolify/hugolify-theme => ../../hugolify/hugolify-theme
	github.com/hugolify/hugolify-theme-posts-tags => ../../hugolify/hugolify-theme-posts-tags
)

require (
	github.com/gohugoio/hugo-mod-bootstrap-scss/v5 v5.20300.20200 // indirect
	github.com/gohugoio/hugo-mod-jslibs-dist/popperjs/v2 v2.21100.20000 // indirect
	github.com/hugolify/hugolify-admin v0.0.0-00010101000000-000000000000 // indirect
	github.com/hugolify/hugolify-theme v1.15.2 // indirect
	github.com/hugolify/hugolify-theme-persons v1.3.12 // indirect
	github.com/hugolify/hugolify-theme-posts v1.1.19 // indirect
	github.com/hugolify/hugolify-theme-posts-authors v1.0.12 // indirect
	github.com/hugolify/hugolify-theme-posts-categories v1.0.9 // indirect
	github.com/hugolify/hugolify-theme-posts-tags v1.0.12 // indirect
	github.com/midzer/tobii v2.5.0+incompatible // indirect
	github.com/twbs/bootstrap v5.3.3+incompatible // indirect
	github.com/twbs/icons v1.11.3 // indirect
)
