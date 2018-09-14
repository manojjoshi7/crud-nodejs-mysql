const controller={};
controller.list=(req,res)=>
{
 req.getConnection((err,conn)=>{
     conn.query('select *from customer',(err,customers)=>
     {
         if(err)
         {
            res.json(err);
         }else
         {
        res.render('customers',{
         data:customers
        });
         }

        
     });
 })
};
controller.save=(req,res)=>
{
    const data=req.body;
    req.getConnection((err,conn)=>{
        conn.query('insert into customer set ?',[data],(err,customers)=>
        {
            res.redirect('/');
           
        });
    })
};
controller.delete=(req,res)=>
{
    const { id }=req.params;
    req.getConnection((err,conn)=>{
        conn.query('delete from customer where id=?',[id],(err,customers)=>
        {
            res.redirect('/');
           
        });
    })
};
controller.edit=(req,res)=>
{
    const { id }=req.params;
    req.getConnection((err,conn)=>{
        conn.query('select *from customer where id=?',[id],(err,customers)=>
        {
            res.render('customer_edit',{data:customers[0]});
           
        });
    })
};
controller.update=(req,res)=>
{
    const { id }=req.params;
    const newcustomer=req.body;
    req.getConnection((err,conn)=>
    {
        conn.query('update customer set ? where id=?',[newcustomer,id],(err,rows)=>
        {
            res.redirect('/');
           
        });
    })

};
module.exports=controller;