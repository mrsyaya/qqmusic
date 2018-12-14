<template>
    <div class="bei">
        <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80" class="tupu">
            <FormItem label="Name" prop="name">
                <Input v-model="formValidate.name" placeholder="用户名:音乐" class="wid" ref="name"></Input>
            </FormItem>
            <FormItem prop="password" label="Password">
                <Input type="password" v-model="formValidate.password" placeholder="密码:654321" class="wid" ref="pass"></Input>               
            </FormItem>
            <FormItem class="center">
                    <Button type="primary" @click="handleSubmit('formValidate')">登录</Button>
                    <Button @click="handleReset('formValidate')" style="margin-left: 8px;background:#19be6b;color:#fff">重置</Button>
            </FormItem>
        </Form>
        </div>
</template>
<script>
    import 'iview/dist/styles/iview.css';
    export default {
        data () {
            return {
                formValidate: {
                    name: '',
                    password: '',
                },
                ruleValidate: {
                    name: [
                        { required: true, message: '请输入用户名', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' },
                        { type: 'string', min: 6, message: '密码不少于六位', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            handleSubmit(name) {
                let name1=this.$refs.name.value;
                let pass=this.$refs.pass.value;
                this.$refs[name].validate((valid) => {
                    if (valid) {
                       if(name1==='音乐'&&pass==="654321"){
                        this.$Message.success('登录成功')
                           this.$router.push("/singer")
                       }
                    } else {
                        this.$Message.error('Fail!');
                    }
                })
            },
            handleReset (name) {
                this.$refs[name].resetFields();
            }
        }
    }
</script>
<style scoped>
    .wid{
      width:85%;
    }
    .bei{
        top:0;
        position:fixed;
        width:100%;
        height:100%;
        background:url('../../assets/img/qqpic.gif') no-repeat center center;
        background-size:100% 100%;
    }
    .tupu{
        text-align: center;
       margin-top:65%;
       border-radius: 20px;
    }
    .center{
        margin-left:0;
    }
    
</style>