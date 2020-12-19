const qs = require('qs')
const chai = require('chai')
const chaiHTTP = require('chai-http');
const e = require('express');
const assert = chai.assert;
let should = chai.should();

const app = "http://localhost:8080/"
chai.use(chaiHTTP)

describe("Testing User Operations", ()=>
{
    it("Create user", ()=>
    {
        chai.request(app)
            .post('api/account/')
            .send(qs.stringify({username: "testUser", password: "12312312"}))
            // .end((err, res)=>
            // {
            //     res.body.message.should.eql('success');
            //     console.log(res.body.message);
            //     if (res.body.message == "success")
            //     {
            //         done();
            //     }
            //     else
            //     {
            //         if(e == null)
            //         {
            //             done("Username already exists");
            //         }
            //         else
            //         {
            //             done(e);
            //         }
            //     }
            // })

            .end((err, res)=>
            {
                assert.equal(res.body.message, "success", res.body.message);
            })
           
    });

    it("Login User", (done)=>
    {
        chai.request(app)
            .get('api/account')
            .send(qs.stringify({username: "testUs1er", password: "2312312"}))
            // .end((err, res)=>
            // {
            //     res.body.message.should.eql("success");
            //     if (res.body.message == "success")
            //     {
            //         done();
            //     }
            //     else
            //     {
            //         if(e == null)
            //         {
            //             done("Username already exists");
            //         }
            //         else
            //         {
            //             done(e);
            //         }
            //     }
            // })
            .end((err, res) => 
            {
                assert.equal(res.body.message, "success", res.body.message)
            })
    });

    it("Modify user", ()=>
    {
        assert(1 == 1);
    });

    it("Update user", ()=>
    {
        assert(1 == 1);
    });
})