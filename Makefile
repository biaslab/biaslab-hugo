THEME_VERSION=$(shell cat .theme_version)

install-theme: ## Install theme
	git clone git@github.com:biaslab/hugo-academic-group.git ./themes/academic-group;
	cd ./themes/academic-group && git checkout $(THEME_VERSION)
set-theme: ## Set theme
	cd ./themes/academic-group && git checkout $(THEME_VERSION)
	@echo "You are using" $(THEME_VERSION)
update-theme: ## Update theme to the latest version
	cd ./themes/academic-group && git pull origin master
	cd ./themes/academic-group && git checkout master
	cd ./themes/academic-group && git rev-parse --short HEAD > ../../.theme_version
show-theme-version: ## Show theme version
	@echo $(THEME_VERSION)
build-website: ## Build website
	hugo -t academic-group
preview-website: set-theme ## Preview website
	hugo server -t academic-group -w
publish: ## Publish website
	./publish.sh
rebuild-docs: ## Build docs
	./rebuild_docs.sh
create-publication: ## Create publication item
	test -n "$(TITLE)" || (echo "Usage: $@ TITLE='<title of publication>'" && exit 1)
	./resources/scripts/create_publication.sh "$(TITLE)"
help:  ## Display this help
	@awk 'BEGIN {FS = ":.*##"; printf "\nUsage:\n  make \033[36m\033[0m\n"} /^[a-zA-Z_-]+:.*?##/ { printf "  \033[36m%-24s\033[0m %s\n", $$1, $$2 } /^##@/ { printf "\n\033[1m%s\033[0m\n", substr($$0, 5) } ' $(MAKEFILE_LIST)
