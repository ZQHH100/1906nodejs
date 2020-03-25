const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb://192.168.178.190";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
    //选择数据库集合
  const collection = client.db("ln1906").collection("users");
    //获取数据
    // collection.find({}).toArray(function(err, docs) {
    //     console.log(docs)
    //   });
    //条件查找
    // collection.find({"name":"zcl"}).toArray(function(err, docs) {
    //     console.log(docs)
    //   });
    //添加数据
    // const doc = {name:"zhangsan",email:"zhang@qq.com",age:123};
    // collection.insertOne(doc,function(err,result) {
    //     console.log("insertOne\n");
    //     console.log(err);
    //     console.log(result);
    //   });
    const where2 ={name:"zhangsan"}
    const set2 = {$set:{age:55}};
    collection.updateOne(where2,set2,function(err,result){
        console.log("更新成功\n");
    });  
  client.close();
});