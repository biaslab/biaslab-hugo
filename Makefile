install-theme:
	git clone git@github.com:biaslab/hugo-academic-group.git ./themes/academic-group;
update-theme:
	cd ./themes/academic-group; git pull
build-website:
	hugo -t academic-group
preview-website:
	hugo server -t academic-group -w
publish:
	./publish.sh
rebuild-docs:
	./rebuild_docs.sh
create-publication:
	test -n "$(TITLE)" || (echo "Usage: $@ TITLE='<title of publication>'" && exit 1)
	./resources/scripts/create_publication.sh "$(TITLE)"
