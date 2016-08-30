install-academic-theme:
	git clone git@github.com:biaslab/hugo-academic-group.git ./themes/academic-group;
update-academic-theme:
	cd ./themes/academic-group; git pull
generate-website:
	hugo -t academic-group
debug-website:
	hugo server -t academic-group -w
publish:
	./publish.sh
