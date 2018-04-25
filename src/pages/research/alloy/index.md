---
title: Alloy
full_title: "Alloy: Clustering with Crowds and Computation"
date:   2016-02-30 16:29:56
summary: Many crowd clustering approaches have difficulties providing global context to workers in order to generate meaningful categories. Alloy uses a sample-and-search technique to provide global context, and combines the deep semantic knowledge from human computation and the scalability of machine learning models to create rich structures from unorganized documents with high quality and efficiency
selected: true
conference: CHI 2016
award: Honorable Mention
doi: 10.1145/2858036.2858411
tags:
  - Crowdsourcing
  - Machine Learning
authors:
  - Joseph Chang
  - Nathan Hahn
  - Niki Kittur
---

###Abstract

Crowdsourced clustering approaches present a promising way to harness deep semantic knowledge for clustering complex information. However, existing approaches have difficulties supporting the global context needed for workers to generate meaningful categories, and are costly because all items require human judgments. We introduce Alloy, a hybrid approach that combines the richness of human judgments with the power of machine algorithms. Alloy supports greater global context through a new sample and search crowd pattern which changes the crowd's task from classifying a fixed subset of items to actively sampling and querying the entire dataset. It also improves efficiency through a two phase process in which crowds provide examples to help a machine cluster the head of the distribution, then classify low-confidence examples in the tail. To accomplish this, Alloy introduces a modular cast and gather approach which leverages a machine learning backbone to stitch together different types of judgment tasks.

