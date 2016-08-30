install-academic-theme:
	git clone git@github.com:biaslab/hugo-academic-group.git ./themes/academic-group;
generate-website:
	hugo -t academic-group
publish:
	./publish.sh
