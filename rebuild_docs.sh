#!/bin/bash
# Rebuild the documentation

CHECKOUT_FL="/tmp/forneylab"

rm -f -r $CHECKOUT_FL
git clone git@github.com:biaslab/ForneyLab.jl.git $CHECKOUT_FL

BUILDPATH=$PWD
rm -f -r $BUILDPATH/static/forneylab/docs/*

julia $CHECKOUT_FL/docs/make.jl

cp -r $CHECKOUT_FL/docs/build/* $BUILDPATH/static/forneylab/docs/

rm -f -r $CHECKOUT_FL

echo "All done."
