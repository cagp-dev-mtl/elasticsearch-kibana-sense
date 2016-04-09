### Vagrantbox for Elasticsearch 2.x + Kibana + sense

####This box has been inspired on Sloan Ahrens's article "A Vagrant Virtual Machine for Elasticsearch 2.x"
https://qbox.io/blog/qbox-a-vagrant-virtual-machine-for-elasticsearch-2-x

######Start your vagrant machine
> vagrant up

######Start kibana:
> sudo /opt/kibana/bin/kibana

######Interact with Kibana
http://192.168.33.99:5601

######Interact with Elastic search through sense GUI
>http://192.168.33.99:5601/app/sense

######Your Elasticsearch instance runs at:
>http://192.168.33.99:9200/

######Additionally you can install the Elasticsearch sample data set by following the instructions described the following link:
https://www.elastic.co/guide/en/elasticsearch/reference/current/_exploring_your_data.html
