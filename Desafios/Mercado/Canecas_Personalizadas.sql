
CREATE DATABASE CanecasPersonalizadas;

USE CanecasPersonalizadas;

CREATE TABLE PRODUTO (
    id_produto INT PRIMARY KEY AUTO_INCREMENT,
    nome_produto VARCHAR(255) NOT NULL,
    descricao TEXT,
    categoria VARCHAR(100),
    estoque INT NOT NULL DEFAULT 0,
    preco DECIMAL(10, 2) NOT NULL,
    material VARCHAR(100),
    data_criacao DATE
);

CREATE TABLE CLIENTE (
    id_cliente INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    cpf VARCHAR(14) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    data_nascimento DATE,
    data_cadastro DATETIME DEFAULT CURRENT_TIMESTAMP,
    rua VARCHAR(255),
    numero VARCHAR(10),
    bairro VARCHAR(100),
    cidade VARCHAR(100),
    complemento VARCHAR(100)
);

CREATE TABLE TELEFONE (
    id_telefone INT PRIMARY KEY AUTO_INCREMENT,
    id_cliente INT NOT NULL, 
    numero VARCHAR(20) NOT NULL,
    tipo VARCHAR(50),
    
    FOREIGN KEY (id_cliente) REFERENCES CLIENTE(id_cliente)
);

CREATE TABLE FORMA_PAGAMENTO (
    id_pagamento INT PRIMARY KEY AUTO_INCREMENT,
    status_pagamento VARCHAR(50),
    valor_pago DECIMAL(10, 2),
    tipo VARCHAR(50) NOT NULL,
    data_pagamento DATETIME DEFAULT CURRENT_TIMESTAMP,
    bandeira_cartao VARCHAR(50),
    parcelas INT,
    comprovante VARCHAR(255)
);

CREATE TABLE PEDIDO (
    id_pedido INT PRIMARY KEY AUTO_INCREMENT,
    id_cliente INT NOT NULL,              
    id_pagamento INT NOT NULL,            
    
    status_pedido VARCHAR(50) NOT NULL,
    valor_total DECIMAL(10, 2) NOT NULL,
    data_pedido DATETIME DEFAULT CURRENT_TIMESTAMP,
    tipo_entrega VARCHAR(100),
    data_entrega DATE,
    codigo_rastreio VARCHAR(100),
    observacao TEXT,
    
    FOREIGN KEY (id_cliente) REFERENCES CLIENTE(id_cliente),
    FOREIGN KEY (id_pagamento) REFERENCES FORMA_PAGAMENTO(id_pagamento)
);

CREATE TABLE ITEM_PEDIDO (
    id_item_pedido INT PRIMARY KEY AUTO_INCREMENT,
    id_pedido INT NOT NULL,             
    id_produto INT NOT NULL,            
    
    quantidade INT NOT NULL,
    preco_unitario DECIMAL(10, 2) NOT NULL,
    subtotal DECIMAL(10, 2) NOT NULL,
    desconto DECIMAL(10, 2) DEFAULT 0.00,
    observacao TEXT,
    
    UNIQUE KEY (id_pedido, id_produto), 
    
    FOREIGN KEY (id_pedido) REFERENCES PEDIDO(id_pedido),
    FOREIGN KEY (id_produto) REFERENCES PRODUTO(id_produto)
);

INSERT INTO PRODUTO (nome_produto, descricao, categoria, estoque, preco, material, data_criacao) VALUES
('Caneca Mágica (Preta)', 'Muda de cor com líquido quente.', 'Caneca Mágica', 150, 49.90, 'Cerâmica', '2024-01-10'),
('Caneca Cerâmica Branca', 'Padrão, ideal para sublimação.', 'Caneca Padrão', 500, 25.00, 'Cerâmica', '2023-05-01'),
('Caneca de Porcelana Premium', 'Acabamento de alto brilho.', 'Caneca Premium', 80, 59.90, 'Porcelana', '2024-03-20'),
('Caneca de Chopp Jateada', 'Para bebidas geladas, 475ml.', 'Caneca Jateada', 120, 39.50, 'Vidro', '2024-02-15'),
('Caneca de Alumínio (Fitness)', 'Leve e resistente para academia.', 'Caneca Esportiva', 220, 35.00, 'Alumínio', '2023-10-10'),
('Kit 6 Canecas de Café', 'Para uso corporativo ou familiar.', 'Kit Promocional', 40, 149.99, 'Cerâmica', '2024-04-05'),
('Caneca com Colher e Tampa', 'Para chás e sopas.', 'Caneca Especial', 90, 65.00, 'Porcelana', '2023-11-20'),
('Caneca Glitter Prata', 'Efeito brilhante, para presentes.', 'Caneca Decorada', 180, 55.00, 'Cerâmica', '2024-01-05'),
('Caneca de Sopa (Grande)', 'Capacidade de 700ml.', 'Caneca Jumbo', 70, 42.00, 'Cerâmica', '2023-09-01'),
('Caneca de Vidro Transparente', 'Para cafés e chás em camadas.', 'Caneca de Vidro', 160, 30.00, 'Vidro', '2024-05-15');


INSERT INTO CLIENTE (nome, cpf, email, data_nascimento, rua, numero, bairro, cidade) VALUES
('Ana Silva', '111.111.111-11', 'ana.silva@email.com', '1990-05-15', 'Rua das Flores', '100', 'Centro', 'São Paulo'),
('Bruno Costa', '222.222.222-22', 'bruno.costa@email.com', '1985-11-20', 'Av. Principal', '500', 'Jardins', 'Rio de Janeiro'),
('Carla Souza', '333.333.333-33', 'carla.souza@email.com', '1995-01-01', 'Rua B', '15', 'Vila Nova', 'Belo Horizonte'),
('David Lima', '444.444.444-44', 'david.lima@email.com', '2000-07-25', 'Travessa C', '220', 'Liberdade', 'São Paulo'),
('Erika Naves', '555.555.555-55', 'erika.naves@email.com', '1988-03-10', 'Rua da Paz', '10', 'Copacabana', 'Rio de Janeiro'),
('Fernando Reis', '666.666.666-66', 'fernando.reis@email.com', '1976-12-05', 'Rua 7 de Setembro', '123', 'Sé', 'Curitiba'),
('Gabriela Melo', '777.777.777-77', 'gabriela.melo@email.com', '1998-02-28', 'Rua das Palmeiras', '33', 'Campina', 'Recife'),
('Hugo Santos', '888.888.888-88', 'hugo.santos@email.com', '1993-09-19', 'Av. Atlântica', '1500', 'Praia Grande', 'Santos'),
('Isabela Alves', '999.999.999-99', 'isabela.alves@email.com', '1980-04-04', 'Rua do Comércio', '40', 'Centro', 'Porto Alegre'),
('João Pereira', '101.101.101-00', 'joao.pereira@email.com', '1970-06-30', 'Rua da Mooca', '88', 'Mooca', 'São Paulo');


INSERT INTO FORMA_PAGAMENTO (tipo, status_pagamento, valor_pago, bandeira_cartao, parcelas) VALUES
('Cartão de Crédito', 'Aprovado', 299.90, 'Visa', 3),
('Pix', 'Aprovado', 119.80, NULL, 1),
('Boleto', 'Pendente', 316.00, NULL, 1),
('Cartão de Débito', 'Aprovado', 35.00, 'Mastercard', 1),
('Vale Presente', 'Aprovado', 149.99, NULL, 1),
('Cartão de Crédito', 'Aprovado', 325.00, 'Amex', 2),
('Pix', 'Aprovado', 55.00, NULL, 1),
('Boleto', 'Aprovado', 42.00, NULL, 1),
('Cartão de Débito', 'Aprovado', 30.00, 'Elo', 1),
('Cartão de Crédito', 'Aprovado', 174.80, 'Hipercard', 1);


INSERT INTO PEDIDO (id_cliente, id_pagamento, status_pedido, valor_total, tipo_entrega, codigo_rastreio) VALUES
(1, 1, 'Em Processamento', 299.90, 'Expresso', 'BR123456SP'), 
(2, 2, 'Enviado', 119.80, 'Normal', 'BR654321RJ'),          
(3, 3, 'Aguardando Pagamento', 316.00, 'Normal', NULL),     
(4, 4, 'Entregue', 35.00, 'Expresso', 'BR987654BH'),      
(5, 5, 'Enviado', 149.99, 'Econômico', 'BR112233SA'),       
(6, 6, 'Em Processamento', 325.00, 'Expresso', 'BR445566CU'),
(7, 7, 'Enviado', 55.00, 'Normal', 'BR778899RE'),          
(8, 8, 'Entregue', 42.00, 'Econômico', 'BR001122PO'),       
(9, 9, 'Em Processamento', 30.00, 'Normal', 'BR334455SA'),  
(10, 10, 'Aguardando Envio', 174.80, 'Expresso', 'BR667788MO');


INSERT INTO TELEFONE (id_cliente, numero, tipo) VALUES
(1, '(11) 98765-4321', 'Celular'),
(2, '(21) 99999-8888', 'Celular'),
(3, '(31) 91111-0000', 'Celular'),
(4, '(11) 90000-0000', 'Celular'),
(5, '(21) 88888-7777', 'Comercial'),
(6, '(41) 96666-5555', 'Celular'),
(7, '(81) 94444-3333', 'Celular'),
(8, '(13) 92222-1111', 'Celular'),
(9, '(51) 97777-6666', 'Residencial'),
(10, '(11) 95555-4444', 'Celular');


INSERT INTO ITEM_PEDIDO (id_pedido, id_produto, quantidade, preco_unitario, subtotal) VALUES
(1, 1, 1, 49.90, 49.90),      -- Pedido 1: Caneca Mágica
(1, 2, 10, 25.00, 250.00),    -- Pedido 1: Canecas Brancas
(2, 3, 2, 59.90, 119.80),     -- Pedido 2: Canecas Porcelana
(3, 4, 8, 39.50, 316.00),     -- Pedido 3: Canecas Chopp
(4, 5, 1, 35.00, 35.00),      -- Pedido 4: Caneca Alumínio
(5, 6, 1, 149.99, 149.99),    -- Pedido 5: Kit 6 Canecas
(6, 7, 5, 65.00, 325.00),     -- Pedido 6: Canecas com Colher
(7, 8, 1, 55.00, 55.00),      -- Pedido 7: Caneca Glitter
(8, 9, 1, 42.00, 42.00),      -- Pedido 8: Caneca Sopa
(9, 10, 1, 30.00, 30.00),     -- Pedido 9: Caneca Vidro
(10, 3, 2, 59.90, 119.80),    -- Pedido 10: 2 Canecas Porcelana
(10, 8, 1, 55.00, 55.00);     -- Pedido 10: 1 Caneca Glitter
