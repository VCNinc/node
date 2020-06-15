[![Modular Core](https://raw.githubusercontent.com/modular/arithmetic-core/master/site/fmna-core.png "Modular Core")](https://fmna.core.modular.social/ "Modular Core")

# Modular Arithmetic Core
[![GitHub issues](https://img.shields.io/github/issues/modular/arithmetic-core)](https://github.com/modular/arithmetic-core/issues)
[![GitHub license](https://img.shields.io/github/license/modular/arithmetic-core)](https://github.com/modular/arithmetic-core/blob/master/LICENSE)
[![GitHub tag](https://img.shields.io/github/tag/modular/arithmetic-core.svg)](https://github.com/modular/arithmetic-core/tags)
[![GitHub release](https://img.shields.io/github/release/modular/arithmetic-core.svg)](https://github.com/modular/arithmetic-core/releases)


[Site](https://fmna.core.modular.social/) |
[Docs](https://fmna.core.modular.social/docs/) |
[Contributing](https://github.com/modular/arithmetic-core/blob/master/CONTRIBUTING.md) |
[Security](https://github.com/modular/arithmetic-core/blob/master/SECURITY.md) |
[Modular](https://github.com/modular) |
[Modulo](https://github.com/modulo)

The Fast Modular Networking Arithmetic Core (fmna-core) package is a core component of Modular. It performs the modular arithmetic calculations that are used by nodes to determine how to route messages and ensure total network coverage.

Modular is a an open-source standard for decentralized social communication. It aims to solve the issues of censorship, deplatforming, intrusive adveritsing, poor user privacy that are prevalent on centralized social media platforms. Users on a Modular Network can communicate with eachother across the world without any centralized point of failure.

## Download
### GitHub
[Download Latest Release](https://github.com/modular/arithmetic-core/releases)

### CDN
[JSDelivr Page](https://www.jsdelivr.com/package/npm/@modular/fmna-core)

	<script src="https://cdn.jsdelivr.net/npm/@modular/fmna-core/fmna-core.min.js"></script>

## Installation
### In a browser:
	<script src="fmna-core.min.js"></script>

### Using npm:
	npm i --save @modular/fmna-core

### In Node.js:
	const { ModularNetwork, ModSpace, CoverageTree } = require('@modular/fmna-core');
