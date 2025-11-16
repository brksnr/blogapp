const Category = require("../models/category");
const Blog = require("../models/blog");
const slugField = require("../helpers/slugfield");
const bcrypt = require("bcrypt");
const User = require("../models/user");
const Role = require("../models/role");
async function populate(){

    const count = await Category.count(); // Blog tablosundaki kayıt sayısını kontrol et

    if(count == 0){

        const users = await User.bulkCreate([
            {fullname: "berk sener", email: "berktest@test.com", password: await bcrypt.hash("1234", 10)},
            {fullname: "gizem sener", email: "gizemtest@test.com", password: await bcrypt.hash("1234", 10)},
            {fullname: "bilgi", email: "bilgi@bilgi.com", password: await bcrypt.hash("1234", 10)},
            {fullname: "bilgi2", email: "bilgi2@bilgi.com", password: await bcrypt.hash("1234", 10)},
            {fullname: "bilgi3", email: "bilgi3@bilgi.com", password: await bcrypt.hash("1234", 10)},
        ]);
        const roles = await Role.bulkCreate([
            {rolename: "admin"},
            {rolename: "moderator"},
            {rolename: "guest"},
        ]);

        const categories = await Category.bulkCreate([
        { name: "Mobil Geliştirme", url: slugField("Mobil Geliştirme") },
        { name: "Web Geliştirme" , url: slugField("Web Geliştirme") },
        { name: "Veri Bilimi" , url: slugField("Veri Bilimi") },
        { name: "Yapay Zeka" , url: slugField("Yapay Zeka") },
        { name: "Oyun Geliştirme" , url: slugField("Oyun Geliştirme") }
        ]);
        const blogs = await Blog.bulkCreate([
        { baslik: "Django ile Web Geliştirme",
            url: slugField("Django ile Web Geliştirme"),
            altbaslik: "Python tabanlı web frameworkü",
             aciklama: "Django, hızlı ve güvenli web uygulamaları geliştirmek için kullanılan popüler bir Python tabanlı web frameworküdür. MTV (Model-Template-View) mimarisini benimser ve birçok yerleşik özellik sunar.",
              resim: "1.jpg",
               anasayfa: true,
                onay: true,
            userId: 2},
        { baslik: "React ile Kullanıcı Arayüzü Geliştirme",
            url: slugField("React ile Kullanıcı Arayüzü Geliştirme"),
             altbaslik: "JavaScript kütüphanesi",
              aciklama: "React, kullanıcı arayüzleri oluşturmak için kullanılan popüler bir JavaScript kütüphanesidir. Bileşen tabanlı mimarisi sayesinde yeniden kullanılabilir ve yönetilebilir UI bileşenleri oluşturmayı kolaylaştırır.",
               resim: "1.jpg",
                anasayfa: true,
                 onay: true,
            userId: 2},
        { baslik: "Veri Bilimi Nedir?",
            url: slugField("Veri Bilimi Nedir?"),
             altbaslik: "Veri analizi ve modelleme",
              aciklama: "Veri bilimi, büyük veri setlerinden anlamlı bilgiler çıkarma sürecidir. İstatistik, makine öğrenimi ve veri görselleştirme gibi teknikleri kullanarak verileri analiz eder ve iş kararlarını destekler.",
               resim: "1.jpg",
                anasayfa: false,
                 onay: true,
            userId: 2},
        { baslik: "Yapay Zeka ve Makine Öğrenimi",
            url: slugField("Yapay Zeka ve Makine Öğrenimi"),
             altbaslik: "Akıllı sistemler geliştirme",
              aciklama: "Yapay zeka (AI), bilgisayarların insan benzeri görevleri yerine getirmesini sağlayan bir teknolojidir. Makine öğrenimi, AI'nın bir alt dalı olup, sistemlerin verilerden öğrenmesini ve performansını artırmasını sağlar.",
               resim: "1.jpg",
                anasayfa: true,
                 onay: true,
            userId: 2},
                 { baslik: "Yapay Zeka ve Makine Öğrenimi",
            url: slugField("Yapay Zeka ve Makine Öğrenimi"),
             altbaslik: "Akıllı sistemler geliştirme",
              aciklama: "Yapay zeka (AI), bilgisayarların insan benzeri görevleri yerine getirmesini sağlayan bir teknolojidir. Makine öğrenimi, AI'nın bir alt dalı olup, sistemlerin verilerden öğrenmesini ve performansını artırmasını sağlar.",
               resim: "1.jpg",
                anasayfa: true,
                 onay: true,
            userId: 3},
                 { baslik: "Yapay Zeka ve Makine Öğrenimi",
            url: slugField("Yapay Zeka ve Makine Öğrenimi"),
             altbaslik: "Akıllı sistemler geliştirme",
              aciklama: "Yapay zeka (AI), bilgisayarların insan benzeri görevleri yerine getirmesini sağlayan bir teknolojidir. Makine öğrenimi, AI'nın bir alt dalı olup, sistemlerin verilerden öğrenmesini ve performansını artırmasını sağlar.",
               resim: "1.jpg",
                anasayfa: true,
                 onay: true,
            userId: 3},
                 { baslik: "Yapay Zeka ve Makine Öğrenimi",
            url: slugField("Yapay Zeka ve Makine Öğrenimi"),
             altbaslik: "Akıllı sistemler geliştirme",
              aciklama: "Yapay zeka (AI), bilgisayarların insan benzeri görevleri yerine getirmesini sağlayan bir teknolojidir. Makine öğrenimi, AI'nın bir alt dalı olup, sistemlerin verilerden öğrenmesini ve performansını artırmasını sağlar.",
               resim: "1.jpg",
                anasayfa: true,
                 onay: true,
            userId: 3},
                 { baslik: "Yapay Zeka ve Makine Öğrenimi",
            url: slugField("Yapay Zeka ve Makine Öğrenimi"),
             altbaslik: "Akıllı sistemler geliştirme",
              aciklama: "Yapay zeka (AI), bilgisayarların insan benzeri görevleri yerine getirmesini sağlayan bir teknolojidir. Makine öğrenimi, AI'nın bir alt dalı olup, sistemlerin verilerden öğrenmesini ve performansını artırmasını sağlar.",
               resim: "1.jpg",
                anasayfa: true,
                 onay: true,
            userId: 1},
                 { baslik: "Yapay Zeka ve Makine Öğrenimi",
            url: slugField("Yapay Zeka ve Makine Öğrenimi"),
             altbaslik: "Akıllı sistemler geliştirme",
              aciklama: "Yapay zeka (AI), bilgisayarların insan benzeri görevleri yerine getirmesini sağlayan bir teknolojidir. Makine öğrenimi, AI'nın bir alt dalı olup, sistemlerin verilerden öğrenmesini ve performansını artırmasını sağlar.",
               resim: "1.jpg",
                anasayfa: true,
                 onay: true,
            userId: 2},
                 { baslik: "Yapay Zeka ve Makine Öğrenimi",
            url: slugField("Yapay Zeka ve Makine Öğrenimi"),
             altbaslik: "Akıllı sistemler geliştirme",
              aciklama: "Yapay zeka (AI), bilgisayarların insan benzeri görevleri yerine getirmesini sağlayan bir teknolojidir. Makine öğrenimi, AI'nın bir alt dalı olup, sistemlerin verilerden öğrenmesini ve performansını artırmasını sağlar.",
               resim: "1.jpg",
                anasayfa: true,
                 onay: true,
            userId: 1},
                 { baslik: "Yapay Zeka ve Makine Öğrenimi",
            url: slugField("Yapay Zeka ve Makine Öğrenimi"),
             altbaslik: "Akıllı sistemler geliştirme",
              aciklama: "Yapay zeka (AI), bilgisayarların insan benzeri görevleri yerine getirmesini sağlayan bir teknolojidir. Makine öğrenimi, AI'nın bir alt dalı olup, sistemlerin verilerden öğrenmesini ve performansını artırmasını sağlar.",
               resim: "1.jpg",
                anasayfa: true,
                 onay: true,
            userId: 1},
        ]);

        
        await users[0].addRole(roles[0]); // admin rolü
        await users[1].addRole(roles[1]); // moderator
        await users[2].addRole(roles[2]); // guest
        await users[3].addRole(roles[2]); // guest
        await users[4].addRole(roles[1]); // moderator
        await categories[0].addBlog(blogs[0]); // Mobil Geliştirme - Django ile Web Geliştirme
        await categories[0].addBlog(blogs[1]); // Mobil Geliştirme - React ile Kullanıcı Arayüzü Geliştirme
        await categories[1].addBlog(blogs[2]);
        await categories[3].addBlog(blogs[3]);
        await categories[1].addBlog(blogs[6]);
        await categories[3].addBlog(blogs[7]);
        await categories[1].addBlog(blogs[8]);
        await categories[3].addBlog(blogs[9]);
        await categories[4].addBlog(blogs[10]);
        await blogs[0].addCategory(categories[1]); // Django ile Web Geliştirme - Web Geliştirme
    }
    
}

module.exports = populate;