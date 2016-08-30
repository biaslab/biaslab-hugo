install-theme:
	git clone git@github.com:biaslab/hugo-academic-group.git ./themes/academic-group;
update-theme:
	cd ./themes/academic-group; git pull
build-website:
	hugo -t academic-group
debug-website:
	hugo server -t academic-group -w
preview-website: build-website
	cd ./public; python -m SimpleHTTPServer 8000
publish:
	./publish.sh
